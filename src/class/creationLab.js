import Graph from "./graph";
import Route from "./route";
import Node from "./node";

   /**
     * Luke-Anthony Gauthier
     * 
     * Construteur d'un tableau  avec longeur et largeur choisie créant les route et noeud en même temps.
     * 
     * @param longueur La longeur du tableau
     * @param largeur la largeur du tableau  
     * @returns un graphe avec les noeud et route compléter 
    */ 
export default function creationLab(longueur, largeur){
    let nodes = [];
    let routes = [];
    let positionNoeud = 0;
    for (let x = 0; x < largeur; x++) {
        
        for (let y = 0; y < longueur; y++) {

         
            if(positionNoeud === 0){
                nodes.push(new Node(positionNoeud,x*100,y*100,"blue"));
            }else{
                nodes.push(new Node(positionNoeud,x*100,y*100,"pink"));
            }
            if(y+1 !== longueur){
                routes.push(new Route(positionNoeud,positionNoeud+1));
            }
            if(x+1 !== largeur){
                routes.push(new Route(positionNoeud, positionNoeud+largeur));
            }
            
            positionNoeud++;
        }    

    }
    return new Graph(nodes, routes)

}