import _ from 'lodash';

/**
 * 1632228 - Luke-Anthony Gauthier
 * 
 * Graph
 * 
 * Est un groupe de noeud avec des arêtes
 * Contient les information et les fonction au bon fonciton des graphes
 */
export default class Graphe{
   /**
     * Luke-Anthony Gauthier
     * 
     * Constructeur de Graph
     * 
     * @param nodes est le tableau qui represente tout les nodes du graphe
     * @param routes est le tableau qui represente tout les routes du graphe
     * @returns null
     */  
  constructor(nodes , routes) {
    this.nodes = _.cloneDeep(nodes);
    this.edges = _.cloneDeep(routes);
  }
}