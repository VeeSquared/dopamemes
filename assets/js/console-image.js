(function(e){"use strict";function r(e,t,n,r,o){n=n.toUpperCase();if(n.length<24){var u=Math.max(0,n.length-12),a=70+u*-3;i(e,a,n,r/2,o)}else if(n.length<29){i(e,40,n,r/2,o)}else{var f=s(n,27);f.forEach(function(n,s){i(e,40,n,r/2,t=="lower"?o-(f.length-1)*40+s*40:o+s*40)})}}function i(e,t,n,r,i){e.font="bold "+t+"px Impact";e.fillStyle="#fff";e.textAlign="center";e.textBaseline="middle";e.lineWidth=7;e.strokeStyle="#000";e.strokeText(n,r,i);e.fillText(n,r,i)}function s(e,t){var n=[],r=e.split(" ");var i=[];for(var s=0,o=r.length;s<o;s++){if((i+r[s]).length<t)i.push(r[s]);else{n.push(i.join(" "));i.length=0;i.push(r[s])}}n.push(i.join(" "));return n}var t={"Advice Dog":"http://i.imgur.com/Qk0VO6D.jpg","3rd World Success Kid":"http://i.imgur.com/WA5duA1.jpg","10 Guy":"http://i.imgur.com/LaENqOV.jpg","90's Problems":"http://i.imgur.com/tL47qtp.jpg","Aaand It's Gone":"http://i.imgur.com/yf12saq.jpg","Actual Advice Mallard":"http://i.imgur.com/WymFmVy.jpg","Advice God":"http://i.imgur.com/xH2fSFg.jpg","Almost Politically Correct Redneck":"http://i.imgur.com/YqLgINf.jpg","Am I The Only One":"http://i.imgur.com/gS9YL5U.jpg","Ancient Aliens":"http://i.imgur.com/NfCknz0.jpg","Annoyed Picard":"http://i.imgur.com/s9GmfSS.jpg","Annoying Childhood Friend":"http://i.imgur.com/27VCyQw.jpg","Annoying Facebook Girl":"http://i.imgur.com/ccczyGt.jpg","Anti-Joke Chicken (Rooster)":"http://i.imgur.com/KOsW0jh.jpg","Awkward Penguin":"http://i.imgur.com/ez1tQrq.jpg","Back In My Day Grandpa":"http://i.imgur.com/zuJSZp8.jpg","Bad Advice Mallard":"http://i.imgur.com/QEPvL2B.jpg","Bad Luck Brian":"http://i.imgur.com/sRW8BiO.jpg","Bear Grylls":"http://i.imgur.com/6Spqy1D.jpg","Brace Yourself":"http://i.imgur.com/NhIq0LY.jpg","Captain Obvious":"http://i.imgur.com/DmUcxBu.jpg","Chemistry Cat":"http://i.imgur.com/8agP4Xe.jpg","College Freshman":"http://i.imgur.com/2Ynyv9t.jpg","College Liberal":"http://i.imgur.com/OWfvSFE.jpg","Condescending Wonka":"http://i.imgur.com/D0e5fgL.jpg","Confession Bear":"http://i.imgur.com/kH1SKhp.jpg","Confession Kid":"http://i.imgur.com/jhOxR12.jpg","Confused Gandalf":"http://i.imgur.com/iIb5SEo.jpg","Conspiracy Keanu":"http://i.imgur.com/pFyk3J7.jpg","Courage Wolf":"http://i.imgur.com/H5qoXFb.jpg","Dating Site Murderer":"http://i.imgur.com/jffNNql.jpg","Depression Dog":"http://i.imgur.com/wgad6P8.jpg","Drunk Baby":"http://i.imgur.com/QvZdbRE.jpg","English Motherfucker":"http://i.imgur.com/sJThEC0.jpg","Evil Plotting Raccoon":"http://i.imgur.com/xMslWFf.jpg","First Day On The Internet Kid":"http://i.imgur.com/TWfdmVu.jpg","First World Cat Problems":"http://i.imgur.com/0vR5Slq.jpg","First World Problem":"http://i.imgur.com/ATcIl08.jpg","Forever Alone":"http://i.imgur.com/pcfXSUU.jpg","Forever Resentful Mother":"http://i.imgur.com/pIrdwo2.jpg","Foul Bachelor Frog":"http://i.imgur.com/JUFmusm.jpg","Foul Bachelorette Frog":"http://i.imgur.com/dYf971U.jpg","Friendzone Fiona":"http://i.imgur.com/Qu1eedL.jpg","Frustrated Farnsworth":"http://i.imgur.com/U3SElKP.jpg","Fuck Me, Right?":"http://i.imgur.com/J9gfxsx.jpg","Gangster Baby":"http://i.imgur.com/C3XhI56.jpg","Good Girl Gina":"http://i.imgur.com/qK6lYr2.jpg","Good Guy Greg":"http://i.imgur.com/UXMPoKN.jpg","Grandma Finds The Internet":"http://i.imgur.com/xPfGYqu.jpg","Grinds My Gears":"http://i.imgur.com/t4JqU1j.jpg","Grumpy Cat (Tard)":"http://i.imgur.com/dU5CDxN.jpg","High Expectations Asian Father":"http://i.imgur.com/7QeB9LI.jpg","Hipster Barista":"http://i.imgur.com/AbWxdy2.jpg","Horrifying House Guest":"http://i.imgur.com/DxmoFp1.jpg","I Dare You Samuel Jackson":"http://i.imgur.com/UQtpdqj.jpg","I Should Buy A Boat":"http://i.imgur.com/XqlqPxn.jpg","I Too Like To Live Dangerously":"http://i.imgur.com/qF70EL9.jpg","Idiot Nerd Girl":"http://i.imgur.com/8hYPYwd.jpg","Insanity Wolf":"http://i.imgur.com/GOOdg3k.jpg","Joker Mind Loss":"http://i.imgur.com/qQIRaOD.jpg","Joseph Ducreux":"http://i.imgur.com/QL7TyR9.jpg","Lame Joke Eel":"http://i.imgur.com/oQXw3jF.jpg","Lame Pun Raccoon":"http://i.imgur.com/nvALRK3.jpg","Lazy College Senior":"http://i.imgur.com/PpkVfzz.jpg","Mad Karma":"http://i.imgur.com/G0QMPum.jpg","Masturbating Spidey":"http://i.imgur.com/dZ7AB4c.jpg","Matrix Morpheus":"http://i.imgur.com/8Yrw6cZ.jpg","Mayonnaise Patrick":"http://i.imgur.com/5jE0Y7f.jpg","Musically Oblivious 8th Grader":"http://i.imgur.com/l5YHN5D.jpg","Not Sure Fry":"http://i.imgur.com/7rFgBB1.jpg","Oblivious Suburban Mom":"http://i.imgur.com/Y7o7UJs.jpg","One Does Not Simply":"http://i.imgur.com/7LrwR1Y.jpg","Overly Attached Girlfriend":"http://i.imgur.com/5blLJLR.jpg","Overly Manly Man":"http://i.imgur.com/dOSn9Na.jpg","Paranoid Parrot":"http://i.imgur.com/KooYHdg.jpg",Pedobear:"http://i.imgur.com/c6JZKRW.jpg","Pepperidge Farm Remembers":"http://i.imgur.com/uFde4v5.jpg",Philosoraptor:"http://i.imgur.com/eERhI5h.jpg","Priority Peter":"http://i.imgur.com/BBEFk0e.jpg","Rasta Science Teacher":"http://i.imgur.com/Js6Ai5T.jpg","Redditor's Wife":"http://i.imgur.com/d1XfJeD.jpg","Revenge Band Kid":"http://i.imgur.com/dlvmaRI.jpg","Schrute Facts":"http://i.imgur.com/UxcvPwT.jpg","Scumbag Brain":"http://i.imgur.com/OZhhZdS.jpg","Scumbag Stacy":"http://i.imgur.com/Qqz1axp.jpg","Scumbag Steve":"http://i.imgur.com/Rfvoc0Y.jpg","Sexually Oblivious Rhino":"http://i.imgur.com/RoaNuEC.jpg","Sheltering Suburban Mom":"http://i.imgur.com/vMkSofv.jpg","Shut Up And Take My Money":"http://i.imgur.com/uWe0rtQ.jpg","Skeptical Third World Kid":"http://i.imgur.com/uwAusxV.jpg","Smug Spongebob":"http://i.imgur.com/OTTRjrv.jpg","Socially Awesome Penguin":"http://i.imgur.com/S6WgQW7.jpg","Success Kid":"http://i.imgur.com/ZibijBz.jpg","Successful Black Man":"http://i.imgur.com/ogIm0cy.jpg","Sudden Clarity Clarence":"http://i.imgur.com/N3Xmfbe.jpg","Tech Impaired Duck":"http://i.imgur.com/riz28ci.jpg","The Most Interesting Man In The World":"http://i.imgur.com/MGv15MH.jpg","The Rent Is Too High":"http://i.imgur.com/r5WLktQ.jpg","Tough Spongebob":"http://i.imgur.com/2w0F1HX.jpg","Unhelpful Highschool Teacher":"http://i.imgur.com/ohbGhuD.jpg","Vengeance Dad":"http://i.imgur.com/0nUStsa.jpg","What Year Is It?":"http://i.imgur.com/fj79hQS.jpg","X, X Everywhere":"http://i.imgur.com/GGy94Gt.jpg","Yeah That'd Be Great":"http://i.imgur.com/nz9M2pl.jpg","Yo Dawg Xzibit":"http://i.imgur.com/XOyGqF2.jpg","You're Bad And You Should Feel Bad":"http://i.imgur.com/YsabGnQ.jpg","You're Gonna Have A Bad Time":"http://i.imgur.com/2tNR7P7.jpg"};var n=document.createElement("canvas");e.list=t;e.meme=function(i,s,o,u,a){if(!i&&!s&&!o)return e.log("> "+Object.keys(t).join("\n> "));var f=n.getContext("2d"),u=u||500,a=u||500,l=500,c=500;f.clearRect(0,0,u,a);var h=new Image;h.setAttribute("crossOrigin","anonymous");h.onload=function(){n.width=u;n.height=a;var e=i.toUpperCase();f.scale(u/500,a/500);f.drawImage(this,0,0,l,c);r(f,"upper",i,l,50);r(f,"lower",s,l,c-50);n.id="myCanvas";$(".canvas").html(n)};if(t[o])var p=t[o];else var p=o;h.src=p}})(console)