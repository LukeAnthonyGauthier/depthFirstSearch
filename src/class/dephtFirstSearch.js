import React from "react";
import Graph from "react-graph-vis";
import { v4 as uuidv4 } from "uuid";
import Route from "./route";
import creationLab from "./creationLab";
import {getRndInteger} from "./fonctions";


// contient tout les options pour modifier les noeuds de react-graphe-vis 
const options = {
  nodes: {
    shape: "square",
    size: 40,
  },
  layout: {
    hierarchical: false,
    randomSeed: 0,
  },
  interaction: {
    dragNodes: false,
    dragView: false,
  },
  physics: {
    enabled: false,
  },
  edges: {
    color: "purple",
    width: 80,
    arrows: {
      to: false,
    },
  },
  height: "500px",

};
// faite la recherche des noeuds et crée le tableau
export default class depthFirstSearch extends React.Component {
   /**
     * Luke-Anthony Gauthier
     * 
     * Constructeur 
     * 
     * @param graph Est tableau complete envoyer pour les modification et l'affichage 
     * @param pileDeNodes Représente la pile des noeuds pour la recherche
     * @param routeDuLab  Est le chemin que le parcourt vas créer
     * @returns null
     */  
  constructor(props) {
    super(props);
    this.graphe = creationLab(10, 10);
    this.state = {
      graphe: this.graphe
    }
    this.pileDeNodes = [];
    this.routeDuLab = [];
  }
  //Le centre ou tout les appele des fonction son fait 
  componentDidMount() {
    this.pileDeNodes.push(this.state.graphe.nodes[0])// parce que c'est le premier 
    this.state.graphe.nodes[0].verifier = true;
  
     this.timerID = setInterval(
      () => this.tick(),
      200
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // Les intération de la recherche 
  tick() {
    
    if (this.pileDeNodes.length !== 0) {
      
      let noeud = this.pileDeNodes.pop();
  
      noeud.verifier = true;
      let tableauVoisin= [];
      let prochinVoisin;
      // trouve tout  les voisim
      let edgeNoeud = this.graphe.edges.filter(edge => (edge.to === noeud.id || edge.from === noeud.id));
      //trie tout les voisins 
      edgeNoeud.forEach(edge => {
        
        if(edge.to !== noeud.id && this.graphe.nodes[edge.to].verifier !== true){
          
          tableauVoisin.push(this.state.graphe.nodes[edge.to]);
        }else if(this.graphe.nodes[edge.from].verifier !== true){
         
          tableauVoisin.push(this.state.graphe.nodes[edge.from]);
        }  
      });
      //envoie dans la pile les prochain et les ceux à revérifier 
      if(tableauVoisin.length !== 0){
        this.pileDeNodes.push(noeud);
        prochinVoisin = getRndInteger(0,tableauVoisin.length);
        this.pileDeNodes.push(tableauVoisin[prochinVoisin]);
        this.routeDuLab.push(new Route(noeud.id,tableauVoisin[prochinVoisin].id));
      }
      // change la couleur des noeud deja vérifier 
      if(noeud.color === "purple"){
        if(noeud.id !== 0){
          this.setState(prevState => ({
            graphe: {
              ...prevState.graphe, edges: this.routeDuLab, nodes: prevState.graphe.nodes.map(node =>
                node.id === noeud.id
                    ? { ...node, color: "lightgray" }
                  : node
              )
            }
          })); 
        }    

      }else{
        //met le noeud vérifier d'une nouvelle couleur 
        if(noeud.id !== 0){
          noeud.color = "purple";
          this.setState(prevState => ({
            graphe: {
              ...prevState.graphe, edges: this.routeDuLab, nodes: prevState.graphe.nodes.map(node =>
                node.id === noeud.id
                    ? { ...node, color: "purple" }
                  : node
              )
            }
          })); 
        }    
      }   
  }else{
    
    // change les couleur pour mettre un affiche fianl du tableau
    console.log(this.state.graphe.nodes[99].color);
    if(this.state.graphe.nodes[99].color !== "#FFA200"){
      this.setState(prevState => ({
        graphe: {
          ...prevState.graphe, edges: this.routeDuLab, nodes: prevState.graphe.nodes.map(node =>
            node.id === 99
                ? { ...node, color: "#FFA200" }
              : {...node, color:"purple"}
          )
        }
      })); 
    }else{
      this.setState(prevState => ({
        graphe: {
          ...prevState.graphe, edges: this.routeDuLab, nodes: prevState.graphe.nodes.map(node =>
            node.id === 0
                ? { ...node, color: "blue" }
              : node
          )
        }
      })); 
    }
  }
}
//affiche le visuel traité par les function
render() {
  return (
    <div>
      <Graph
        key={uuidv4()}
        graph={{nodes: this.state.graphe.nodes, edges: this.state.graphe.edges}}
        options={options}
      />
    </div>
  );
}

}
