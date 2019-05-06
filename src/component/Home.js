
import React, { Component } from 'react';
import Box from './MH';
import Titre from './titre';
import Present from './present';

class Home extends Component {
    render() {
      const legend ={
        fontSize: 18, margin: 5, backgroundColor: 'black', borderStyle:'double', borderColor:'goldenrod', fontFamily: 'Courier New',
           color: 'goldenrod', padding: 3, display:'inline-block', verticalAlign:'top', width:310, height:460,   display: 'inline-block'
          }
      const complex ={borderColor: 'goldenrod', backgroundColor: 'black', borderStyle: 'double', padding: 10,
        textAlign: 'justify', marginLeft: 20, margin: 15, height: 240, textAlign:'center',
         fontFamily: 'Courier New', marginBttom: 5, display: 'inline-block', width:380, verticalAlign: 'top', textAlign: 'left',color:'goldenrod',
      }
      const pres ={borderColor: 'goldenrod', backgroundColor: 'black', borderStyle: 'double', padding: 10,
         marginLeft: 20, marginBlockStart: 10, height: 120, fontFamily: 'Courier New', marginBottom: 5,textAlign:'justify',
         display: 'inline-block', width:1200, verticalAlign: 'top', textAlign: 'left', color:'goldenrod', textAlign:'left',
      }
      const head ={
        textAlign:'center',
      }
      return (
        <div className="test">
      
           <h1 style ={head} className="header" >MAISONS D'HOTES</h1>
           <div className="test-part">
           <span  style ={legend} ><Box link='/couleurs' name='Couleur Méditerranée' des="Adresse: Tabarka" tel="Tel: (+216) 52 040 314" mail="Mail: contact@couleur.com" img="./tabarka.jpg"/></span>
           <span style ={legend} > <Box name='Dar Ayed' des="Adresse: Tamzret Matmata" tel="Tel: (+216) 55 267 409" mail="Mail: darayed2007@gmail.com" img="./dar ayed.jpg"/></span>
           <span style ={legend} ><Box name='Diar Abou Habibi' des="Adresse:Tozeur" tel="Tel: (+216) 76 460 270" mail="Mail: diarhabibi@topnet.tn" img="./tozeur.jpg"/> </span>
           <span style ={legend} > <Box name='Dar Traki' des="Adresse: La Medina Tunis" tel="Tel: (+216) 24 789 808 " mail="Mail: dartraki@yahoo.fr" img="./dartraki.jpg"/></span>
           <span style ={legend} > <Box name='Chaumières Ain Drahem' des="Adresse: Ain Drahem" tel="Tel: (+216) 76 460 270" mail="Mail: diarhabibi@topnet.tn" img="./ain.jpg"/></span>
           <span style ={legend} > <Box name='Dar Damian' des="Adresse: ElHaouaria"tel="Tel: (+216) 55 269 918" mail="Mail: contact@dardamian.com" img="./haouaria.jpg"/></span>
           <span style ={legend} > <Box name='Dar Bibine' des="Adresse: Djerba" tel="Tel: (+216) 94 712 482" mail="Mail: info@darbibine.com"img="./djerba.jpg"/></span>
           <span style ={legend} > <Box name='Dar Hi Nafta' des="Adresse: Nefta" tel="Tel: (+216) 76 432 779" mail="Mail: info@dar-hi.com"img="./nefta.jpg"/></span>
  
          </div>
          <br/><br/>   <br/>  <br/><br/><br/>   <br/>  <br/>
          <br/>
          <br/>
          <div className="presentation">
          <h1 style ={head} >Pourquoi Choisir une maison d'hôte???</h1>
          <span style ={pres} className="span3"><Present des="Vos hôtes qui ont choisi leur lieu d’installation sont aussi des amoureux de leur région est sont de vrais guides touristiques avec leurs petits trucs pour visiter les environs, ce qui permet de personnaliser votre séjour.
  
  La plupart aiment faire partager ou découvrir leurs passions qui rendent si uniques les séjours dans ce type d’hébergement. Nous nous souvenons d’un séjour chez une personne qui s’est installé maintenant en Provence et qui est passionnée d’origami et de bio ici.  Et puis, il y a aussi cette autre hôtesse en bourgogne passionnée de patchwork dans un château en pleine nature ici et bien d’autre encore."/></span>
          </div>
          <br/>
          <br/>
          <br/><br/>
        
          <br/>  <br/>
          
          <div ClassName="trophies">
          <h1 style ={head} >Bien à prendre en Compte</h1>
          <span style ={complex} className="span2"><Titre name='Réservation' des="Pour réserver, veuillez choisir votre établissement, vérifier la disponibilité en cliquant les dates demanadées. Ensuite procéder à la réservation et choisissez le mode de paiement Un mail de confirmation vous sera envoyé un fois la réservation validée."/></span>
          <span style ={complex} className="span2"><Titre  name='Politique de Remboursement' des="Pour les annulation avant une semaine 90% du montant vous sera remboursé. Pour les annulation avant 48H, 70% du montant vous sera remboursé. Au dela de 48H vous n'avez plus le droit à aucun remboursement. Les remboursements seront faits par virement bancaire dans un délai maximal de 48H à compter de la date de l'annulation. "/></span>
          <span style ={complex} className="span2"><Titre  name='Autres Informations' des="Pour votre confort, veuillez mentionner aux hôtes vos demandes particuliers (besoin d'oreiller orthopédiques, dras supplémentaires, allérgie...) "/></span>
          </div>
        </div>
      );
    }
  }
  export default Home;