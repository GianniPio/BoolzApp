var page = new Vue (
    {
        el: '#box',  /*collegamento ad HTML */
         data: {

            // array di oggetti (mio account)
            user: [
                {
                name: 'Khal_Gianni',
                avatar:'img/avatar_io.jpg',
                }
            ],

            // array di oggetti (contatti con messaggi)
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    messages: 
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',  /* Messaggio inviato */
                            visibleMinibox: false  /*Per il div usato per eliminare il messaggio*/
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',  /* Messaggio ricevuto */
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    messages: 
                    [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            visibleMinibox: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    messages: 
                    [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            visibleMinibox: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'Luisa',
                    avatar: 'img/avatar_4.jpg',
                    messages: 
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'MichFrancoele',
                    avatar: 'img/avatar_1.jpg',
                    messages: 
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',  /* Messaggio inviato */
                            visibleMinibox: false  /*Per il div usato per eliminare il messaggio*/
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',  /* Messaggio ricevuto */
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    messages: 
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',  /* Messaggio inviato */
                            visibleMinibox: false  /*Per il div usato per eliminare il messaggio*/
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',  /* Messaggio ricevuto */
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    messages: 
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',  /* Messaggio inviato */
                            visibleMinibox: false  /*Per il div usato per eliminare il messaggio*/
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',  /* Messaggio ricevuto */
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    messages: 
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',  /* Messaggio inviato */
                            visibleMinibox: false  /*Per il div usato per eliminare il messaggio*/
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',  /* Messaggio ricevuto */
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    messages: 
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',  /* Messaggio inviato */
                            visibleMinibox: false  /*Per il div usato per eliminare il messaggio*/
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',  /* Messaggio ricevuto */
                            visibleMinibox: false
                        }
                    ],
                },

                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    messages: 
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',  /* Messaggio inviato */
                            visibleMinibox: false  /*Per il div usato per eliminare il messaggio*/
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visibleMinibox: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',  /* Messaggio ricevuto */
                            visibleMinibox: false
                        }
                    ],
                }
            ],

            // Per la stampa del messaggio inviato
            newMessage: 
                {
                    date: new Date().toLocaleString(), /*Stampa ora e data attuale*/
                    text: "",
                    status: 'sent',
                    visibleMinibox: false
                },

            // Per la stampa del messaggio ricevuto
            messageContact:
                {
                    date: new Date().toLocaleString(),
                    text: 'Ok!',
                    status: 'received',
                    visibleMinibox: false
                },

            // contatore usato per indicare la chat attiva
            chatActive: 0,

            // usato per salvare il valore durate la ricerca della chat
            ricercaChat: "",
        },

        methods: {

            // funzione che cambia il contatore, usata per indicare la chat attiva
            changeChat(index) {
            
            this.chatActive = index;  // il contatore assume il valore di index

            },

            // funzione per mandare e ricevere messaggi
            invioNewMessage() {

                // condizione per inviare il messaggio, la stringa non deve essere vuota
                // Se è vuota, non invia
                if (this.newMessage.text !== "") {
                    
                    // pushare nell'array il nuovo messaggio mandato
                    this.contacts[this.chatActive].messages.push(this.newMessage);

                    // il messaggio assume nuovamente il valore vuoto
                    this.newMessage =
                    {
                        date: new Date().toLocaleString(),
                        text: '',
                        status: 'sent'
                    }

                    // dopo 1 secondo, pusha un messaggio ricevuto
                    setTimeout(() => {this.contacts[this.chatActive].messages.push(this.messageContact)}, 1000);
                       
                }
                
            
            },


            // funzione che cambia il valore si visibleMinibox (per l'apparizione del box per eliminare il messagggio)
            changeVisible(numberMess) {

                // tramite il percorso indico che se il visibleMibox di quel determinato messaggio (in posizione numberMess) nella chat attiva è vero, diventa falso
                if (this.contacts[this.chatActive].messages[numberMess].visibleMinibox == true) {
                    
                    this.contacts[this.chatActive].messages[numberMess].visibleMinibox = false
                } else {
                    // o viceversa
                    this.contacts[this.chatActive].messages[numberMess].visibleMinibox = true;
                }
            },

            // funzione che elimina i messaggi
            eliminaMess(numberMess) {

                // elimina il messaggio in posizione (numberMess) di quella chat attiva
                this.contacts[this.chatActive].messages.splice(numberMess, 1);

            }

        },

        

    }
)

