'strict mode'
const process = require('child_process');
const path = require('path')
const chalk = require('chalk');
const fs = require('fs')
/* ------------------------- Internal Dependencies -------------------------- */

/* ---------------------------- Initialization ------------------------------ */
function main() { 
  const inputDir = path.resolve('assembly')
  const outputDir = path.resolve('src/assembly/asm')
  if(!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

  // Scan the Foundry Minerals
  for (var childDirectory of fs.readdirSync(inputDir)){

    // Scan the Foundry Mineral Packages
    if (fs.statSync(path.join(inputDir, childDirectory)).isDirectory()){
      
      // Scan the directory for for ".c" and ".c++" files
      var childDirectoryItems = fs.readdirSync(path.join(inputDir,childDirectory))

      if (childDirectoryItems) {
        // console.log(childDirectoryItems)
          childDirectoryItems.map(function(item){
            var fileExtension = item.substr(item.lastIndexOf("."))

            if ( fileExtension === '.c' || fileExtension === '.cpp' )  { 
              var fileNamejs = item.substr(0, item.lastIndexOf(".")) + ".js";

              var targetFile = path.join(inputDir,childDirectory,item)

              const webAssemblyCompile = process.spawn('emcc', [targetFile, '-o', path.join(inputDir,childDirectory, fileNamejs)]);
              webAssemblyCompile.stdout.on('data', (data) => {
                console.log(`${data}`);
              });

              webAssemblyCompile.stderr.on('data', (data) => {
                console.log(`${data}`);
              });

            }


            var targetFile = path.join(inputDir,childDirectory,item)
            if(!fs.existsSync(path.resolve(outputDir,childDirectory))) { fs.mkdirSync(path.resolve(outputDir,childDirectory))}
          

            // const webAssemblyCompile = spawn('emc', [__dirname = 'compile', '-o', wasmFile, targetFile]);
            //   webAssemblyCompile.stdout.on('data', (data) => {
            //     console.log(`${data}`);
            //   });

            //   webAssemblyCompile.stderr.on('data', (data) => {
            //     console.log(`${data}`);
            //   });
          })
      }

    }
  }
}
main()