/**
 * 1632228 - Luke-Anthony Gauthier
 * 
 * Route
 * 
 * sont les différent liens entre node pour leur route
 */
export default class Route {
   /**
     * Luke-Anthony Gauthier
     * 
     * Constructeur de Route
     * 
     * @param from represent le noeud pointant 
     * @param to represente le noeud pointé
     * @returns null
     */  
    constructor(from, to) {
      this.to = to;
      this.from = from;    
    }
  }