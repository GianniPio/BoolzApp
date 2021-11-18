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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
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
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],

            // Per la stampa del messaggio inviato
            newMessage: 
                {
                    date: new Date().toLocaleString(),
                    text: "",
                    status: 'sent'
                },

            // Per la stampa del messaggio ricevuto
            messageContact:
                {
                    date: new Date().toLocaleString(),
                    text: 'Ok!',
                    status: 'received'
                },

            // contatore usato per indicare la chat attiva
            chatActive: 0,
            ricercaChat: "",
        },

        methods: {

            // funzione che cambia il contatore
            changeChat(index) {
            
            // il contatore assume il valore di index
            this.chatActive = index;
            },

            // funzione per mandare e ricevere messaggi
            invioNewMessage() {

                // condizione per inviare il messaggio, la stringa non deve essere vuota
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

                    // dopo 3 secondi, pusha un messaggio ricevuto
                    setTimeout(() => {this.contacts[this.chatActive].messages.push(this.messageContact)}, 3000);
                       
                }
                
            
            }

        },

        

    }
)

