console.log('INIZIO DEL BOT');

var Twit = require('twit');

var chiavi = require('./Key_secret.js');

var fs = require('fs')
var logger = fs.createWriteStream('report-jackBlack.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
});

var T = new Twit(chiavi);

console.log('Log-in avvenuto correttamente.');

function BOMBA(tweet) {
	// grab ID of tweet to retweet
	var tweetId = tweet.id_str;
	var tweetName = tweet.user.screen_name;
	var testoTweet = tweet.text;
	var inRisposta = tweet.in_reply_to_user_id_str;//tweet.in_reply_to_status_id_str;
	// console.log(testoTweet);

	if ( tweet.user.screen_name !== 'Jack_____Black' ) {
		if( testoTweet.includes('RT ') == false && inRisposta === null || testoTweet.includes('RT @'+tweet.user.screen_name) == true && inRisposta === null){
			// Fai la funzione Retweetta e metti mi piace
      console.log(tweetName);
			console.log(testoTweet);
			function RTF(){
				// fai retweet
				T.post('statuses/retweet/:id', { id: tweetId }, function (err, data, response) {

					if (err){
            console.log('Errore.\n');
						console.log(err);
					}else{
						console.log('RT fatto a '+ tweetName+'\n');
					}
				});
				//metti mi piace
				T.post('favorites/create', { id: tweetId }, function (err, data, response) {
					if (err){
						console.log('errore\n');
            console.log(err);
					}else{
						console.log('LK messo a '+ tweetName+'\n');
					}
				});
				//scrivi report
				logger.write(tweet.user.url+'status/'+ tweet.id_str + ' creato il ' + tweet.created_at + "\n");
				console.log('Report fatto.\n');
			}; //fine funzione RTF

			//creo un nemro casuale da moltiplicare per fare il ritardo in millisecondi
      // var r = Math.round((Math.random() * 4 + 1) *600000 + 40*60000); //r = Math.floor(Math.random() * 4) + 1;
			var r = 5000; //r = Math.floor(Math.random() * 4) + 1;
			// var tempoRitardo = Math.round(r/60000);
			// console.log(tempoRitardo + ' minuti al RT e LK di ' + tweetName + '\n' );
			//faccio partire la funzione con ritardo
			setTimeout(RTF, r );
		}else{
		 	console.log('E\' un RT o un commento. Non lo retwitto.\n');
		}; //chiusura IF RT o COMMENTO
	}else{
		console.log('E\' un RT del BOT. Non fare niente.\n');
	}; //chiusura IF utente bot
}; //chiusura di BOMBA

//insert ID user account da seguire (esempio MorpheusNetwork, Vestarin).
var GymRewards = '954770824501911552';
var EuropeanCryptoB = '938127831820881920';
var airpod_project = '936204840878866432';
var kora = '904533387729358854';

var dubtokens = '900442763598192641';
var jointeamwell = '3731754254';
var morphcrypto = '943369448035049472';

var vestarin = '928665122645692416';


var the4thpillarltd = '942672513104007168';
var Alt_Estate = '910869642368966657';
var SocialWalletInc = '930801214182260737';
var ssothealth = '962547978803302400';

var SocialCXN = '837568377749180416';
var robotinaICO = '955765875428163584';
var DigitizeCoin = '950165227731017729';
var ishookinc = '2230396922';
var BittwattPteLtd = '961623007218290688';
var coolcousinco = '3345461817';
var VelixId = '913757709484228608';
var fhfcommunity = '930320920861745153';
var ProducToken = '949964714125201413';
var Utrumdotio = '908409030799851520';

//27apr
var daostack = '778747478384312321';
var seal_network = '899904255317778432';
var capital_company = '967887269104320512';
var LoandexOfficial = '978960131638644736';
var vexanium = '948468159073234944';
var PayPortal_India = '948895169759211521';
var exportonlineico = '955435252083843072';
var BGXGlobal = '957024331376275456';
var qurrex = '928410762380529664';

var stream = T.stream('statuses/filter', { follow:  ( ' 174606919 ' )});
//parte la connessione con
// var stream = T.stream('statuses/filter', { follow:  ( '778747478384312321 , 899904255317778432 , 957024331376275456 , 967887269104320512 , 978960131638644736 , 948468159073234944, 948895169759211521 , 955435252083843072 , 928410762380529664 , 908409030799851520 , 949964714125201413 , 943369448035049472 , 928665122645692416 , 900442763598192641 , 3731754254 , 930320920861745153 , 913757709484228608 , 3345461817 , 954770824501911552 , 938127831820881920 , 936204840878866432 , 961623007218290688 , 2230396922 , 904533387729358854 , 837568377749180416 , 955765875428163584 , 962547978803302400 , 910869642368966657 , 942672513104007168 , 950165227731017729 , 930801214182260737' ) });
// console.log('Connesisone al utente avvenuta correttamente.\n');
//ogni volta che l'account twitta lui fa partire la funzione Bomba
stream.on('tweet', BOMBA );
