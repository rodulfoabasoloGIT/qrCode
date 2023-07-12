import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Please enter a URL link :)",
      name: "URL",
    },
  ])
  .then((answers) => {
    const link = answers.URL;
    var qr_svg = qr.image(link);
    qr_svg.pipe(fs.createWriteStream("inkshared.png"));

    fs.writeFile("D:/test/link.txt", link, (error) => {
      if (error) {
        console.log("error in wrting the file");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("wtf happened");
    } else {
      console.log("somethings wrong");
    }
  });
