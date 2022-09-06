const { connection } = require('../connection/conection.js');

const getUser= async(req,res)=>{
    const response =  await connection.query('select * from users');
    return res.status(200).json(response.rows);
};

const getUserById= async (req, res)=>{
    const id= req.params.id;
    const response = await connection.query('select * from users where id=$1',[id]);
    if (response.rows.length>0) {
        return res.json(response.rows);
    }else{
        return res.status(404).json({"mensaje":"usuario no encontrado"});
    }
};

const createUser = async (req,res)=>{
    //try {
        const {username,email}=req.body;
        const response = await connection.query('insert into users(username,email) values ($1,$2)',[username,email]);
        //console.log(response);
        if (response.rowCount>0) {
            return res.send('user creado');
        } else {
            return res.send('Opss, error al crear usuario');
        }
    //} catch (error) {
      //  console.log(error);
    //}

};

const updateUser= async (req, res)=>{
    const {id}= req.params;
    const {username, email}= req.body;
    const response = await connection.query('update users set username=$1, email=$2 where id=$3',[username,email,id]);

    if (response.rowCount>0) {
        return res.json({"mensaje":"usuario actualizado correctamente"});
    } else {
        return res.status(404).json({"mensaje":"error al actualizar usuario"})
    }
};

const deleteUser= async (req, res)=>{
    //try {
        const {id} = req.params;
        const response = await connection.query('delete from users where id=$1',[id]);
        if (response.rowCount>0) {
            return res.json({"mensaje":"usuario eliminado"});
        } else {
            return res.status(404).json({"mensaje":"error al eliminar usuario"});
        }
        
    // } catch (error) {
    //     console.log(error);
    // }
    
};

module.exports={
    getUser:getUser,
    getUserById:getUserById,
    createUser:createUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
};