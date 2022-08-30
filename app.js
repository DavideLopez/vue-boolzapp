console.log('boolzap')

const app = new Vue({
  el: "#root",
  data: {
      contacts: [{
              id: 1,
              name: 'Tony Montana',
              avatar: '_2',
              visible: true,
              messages: [{
                      date: '28/08/2022 15:30:55',
                      message: 'Come stai?',
                      status: 'sent'
                  },
                  {
                      date: '28/08/2022 15:50:00',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'sent'
                  },
                  {
                      date: '28/08/2022 16:15:22',
                      message: 'Certo!!',
                      status: 'received'
                  }
              ],
          },
          
          {
              id: 2,
              name: 'Mauro Formisano',
              avatar: '_4',
              visible: true,
              messages: [{
                      date: '28/08/2022 15:10:02',
                      message: 'Mauro, ho distrutto il footer! help me!!!',
                      status: 'sent'
                  },
                  {
                      date: '28/08/2022 15:12:10',
                      message: 'Davide!! hai pushato?? che controllo',
                      status: 'received'
                  },
                  {
                      date: '28/08/2020 15:12:22',
                      message: 'Si',
                      status: 'sent'
                  },
                  {
                    date: '28/08/2022 15:15:24',
                    message: 'Hai solo scritto male la formula delle colums',
                    status: 'received'
                },
              ],
          },
          {
              id: 4,
              name: 'Pinco Panco',
              avatar: '_3',
              visible: true,
              messages: [{
                      date: '28/08/2022 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '28/08/2022 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              id: 5,
              name: 'Panco Pinco',
              avatar: '_5',
              visible: true,
              messages: [{
                      date: '28/08/2022 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '28/08/2022 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              id: 6,
              name: 'Miriam macello totale',
              avatar: '_io',
              visible: true,
              messages: [{
                      date: '128/08/2022 15:30:55',
                      message: 'che disastro!',
                      status: 'received'
                  },
                  {
                      date: '28/08/2022 15:50:00',
                      message: 'ahi ahi......',
                      status: 'received'
                  },
                  {
                      date: '28/08/2022 15:51:00',
                      message: 'che me voi imbruttì?????',
                      status: 'sent'
                  }
              ],
          },
          {
              id: 7,
              name: 'Mastro Lindo',
              avatar: '_7',
              visible: true,
              messages: [{
                      date: '28/08/2022 15:30:55',
                      message: 'Sai che col mio nuovo detersivo il tuo pavimento splenderà come uno specchio???',
                      status: 'sent'
                  },
                  {
                      date: '28/08/2022 15:50:00',
                      message: 'Non mi interessa, grazie',
                      status: 'received'
                  }
              ],
          },
          {
              id: 8,
              name: 'Jessico Calcetto',
              avatar: '_6',
              visible: true,
              messages: [{
                      date: '28/08/2022 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                  },
                  {
                      date: '28/08/2022 15:50:00',
                      message: 'No, ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '28/08/2022 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
          }
      ],
      currentIndex: 0,
      currentId: 1,
      filtro: '',
      message: '',
      filteredContacts: [],
      randomReplies: ['Ciao', 'Come stai?', 'Usciamo Stasera??', 'Come butta?', 'Ti và di mangiare la pizza?', 'PRRRRRRRR', 'Non posso, devo studiare', 'Hai pushato??']
  },

  methods: {
      filtra() {
          this.filteredContacts = this.contacts.filter((item) => {
              return item.name.toLowerCase().includes(this.filtro.toLowerCase());
          })
      },
      changeActive(id) {
          this.currentId = id;
          const index = this.contacts.findIndex((el) => {
              return el.id === id
          })
          this.currentIndex = index;
      },
      sendMessage() {
          if (this.message == '') return;
          const newMessage = {
              date: 'Oggi ' + dayjs().format('HH:mm'),
              message: this.message,
              status: 'sent'
          };
          const replyMessage = {
              date: 'Oggi ' + dayjs().format('HH:mm'),
              message: this.randomReplies[Math.floor(Math.random() * this.randomReplies.length)],
              status: 'received'
          }
          this.contacts[this.currentIndex].messages.push(newMessage);
          this.message = '';
          setTimeout(() => {
              this.contacts[this.currentIndex].messages.push(replyMessage);
          }, 1000);
      },
       eraseMessage(index, currentIndex) {  // ci ho provato 
          if (this.contacts[currentIndex].messages.length > 0) {
              this.contacts[currentIndex].messages.splice(index, 1);
          } else return;
      },
      noDate(contact) {
          const noDate = contact.messages.length > 0 ? contact.messages.at(-1).date : ''
          return noDate
      },
      noMessage(contact) {
          const noMessage = contact.messages.length > 0 ? contact.messages.at(-1).message : 'NESSUN MESSAGGIO';
          return noMessage
      },
      showChatMobile(){
          this.contacts[this.currentIndex].visible = !this.contacts[this.currentIndex].visible
      },

  },
  computed: {},
  mounted() {
      this.filtra()
  },
});




