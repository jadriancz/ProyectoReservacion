import { Request , Response } from 'express';
import pool from '../database'; 

class GamesController{
    
    
   public async list ( req:Request ,res:Response){
 const games=await pool.query('select * from games') 
   res.json(games);
   }
  
   public async getOne ( req:Request ,res:Response):Promise <any>{
      const {id} = req.params; 
      const games=await pool.query('SELECT * from games where id=?', [id]);
      if(games.length>0){
          return res.json(games[0]);
       }
 res.status(404).json({text:"The game doesn't"})     
         }

   public async create ( req:Request ,res:Response): Promise<void> {
     await pool.query('INSERT INTO games set ?', [req.body]);
       res.json({message:'game saved '});
    }

   public async delete ( req:Request ,res:Response){
       const {id} = req.params; 
       await pool.query('DELETE from games where id= ?', [id]);
   res.json({message:'delete game '+id});
}
    
   public async update ( req:Request ,res:Response){
       const {id} = req.params; 
       await pool.query('Update games set ?  where id= ?', [req.body,id]);
         res.json({text:'actualiza a game ' + id });
    }


}
    
const gamesController=new GamesController();
export default gamesController;    