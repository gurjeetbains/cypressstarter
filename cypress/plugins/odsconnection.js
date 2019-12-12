const {Pool} = require('pg')
const pool = new Pool({
    host: 'your host',
    port: 'port number',
    user: 'user name',
    password: 'password',
    database: 'database name',
    max: 4,
    //idleTimeoutMillis: 30000,
    //connectionTimeoutMillis: 2000,
  })
const addresstype=[
  {
    structure:'home building'
  },
  {
    structure:'office building'
  }
]
const querycreator = (structure='build')=>{
  return `select *
  from table_name 
  where condition1= ${structure}
  limit 1`
}
let fileoutput = {}
let datacreation = async ()=>{
  try{
    let connection = await pool.connect()
    for (const data of addresstype){
      let out=querycreator(data.structure);
      let res = await connection.query(out) 
      fileoutput[data.structure]=res.rows[0]
      //console.log(res.rows);
    }
    filestringified =JSON.stringify(fileoutput);
    await connection.release()
    // await pool.end()
    return filestringified
  }catch(err){
    console.log(err)
  } 
}
//resultfunc2(); 
module.exports.data = datacreation