const fs= require('fs');
const path= require('path');


const directorypath="C:\\Users\\laya_\\OneDrive\\Desktop\\Zoho-web\\zoho-desk";


const BoxShadow =(dir)=>{
    fs.readdir(dir,(err,files)=>{
        if(err){
            return console.log(err);
        }

        files.forEach((file)=>{
            const filePath=path.join(dir,file);

            if(fs.lstatSync(filePath).isDirectory()){
                BoxShadow(filePath);
            }else if(filePath.endsWith(".css")){
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                      return console.log('Error reading file: ' + err);
                    }
          
                    const lines = data.split('\n');
                    lines.forEach((line, index) => {
                      if (line.includes('width')) {
                        console.log(`File            : ${path.basename(file)},\n Line: ${index + 1},\n Content: ${line.trim()}`);
                        console.log("-----------------------------------------------------------------------------------")
                      }
                    });
                });
            }
        });
    });
};
          


BoxShadow(directorypath);