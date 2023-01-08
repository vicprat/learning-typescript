import { Router } from "express";

const router = Router();

type Usuario = {
  id: string;
  name: string;
};

router.get("/", (req, res) => {
  res.send("hola mundo");
});

router.post("/", (req, res) => {
  //destructuring de nuestra peticion
  //por defecto  body tendra valor de tipo any, por lo cual tenemos que crear un type y definir su valor con as y el type que hayamos creado
  const { name } = req.body as Usuario;
  console.log(name);

  res.send("ok");
});

export default router;
