FROM localhost:5000/node
ADD myapp.js /myapp.js 
ENTRYPOINT ["node", "myapp.js"]
