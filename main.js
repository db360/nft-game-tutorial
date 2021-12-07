/** Connect to Moralis server */
const serverUrl = "https://rxl3xw6fxlkw.usemoralis.com:2053/server";
const appId = "vZFNiJrNY3xmzpPW065LWJ0Rdeoy40dplLhMAvfx";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

//Assets
function preload ()
{
  this.load.image('background', 'assets/BG.png')
}

//Initial setup
function create ()
{
  this.add.image(400, 300, 'background').setScat
}

//60 times per second
function update ()
{
    //Logic
}




/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

// https://forum.moralis.io/
