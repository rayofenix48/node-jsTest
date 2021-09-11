#! /bin/bash
npm init -y &&
npm install apollo-server-express ;  
npm install express-graphql ;
npm install express nodemon graphql graphql-tools mongoose ;
npm install node-fetch ;
npm install @types/react @types/react-dom
npm install @apollo/client graphql mongoose react react-dom react-scripts nodemon;
npm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-env @babel/preset-react ;
npm install  @babel/core @babel/node @babel/cli @babel/preset-env @babel/preset-react ;
#  "start": "nodemon src/index.js --exec babel-node"      agregar esta linea a package. json
mkdir src dist ;
echo '{"presets" : [
    "@babel/preset-env", "@babel/preset-react"
]
}' > .babelrc ;
cd src &&
touch index.js;





