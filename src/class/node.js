
/**
 * 1632228 - Luke-Anthony Gauthier
 * 
 * Node
 * 
 * sont des regroupement d'information avec index sont lier par des routes 
 */
export default class Node{
    /**
     * Luke-Anthony Gauthier
     * 
     * Constructeur de Node
     * 
     * @param id est l'identifiant de la node 
     * @returns null
    */ 
    constructor(id,x,y,color) {
      this.id = id;
      this.x = x
      this.y = y;
      this.color = color
      this.verifier = false;
    }
}