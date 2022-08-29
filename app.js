console.log('boolzap')

const app = new Vue({
  el: "#root",
  data: {
    contacts: [{
      id: 1,
      name: 'Andrea',
      avatar: '_1',
      visible: true,
      messages: [{
        date: '10/01/2020 15:30:55',
        message: 'Come stai?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Bene grazie! Stasera ci vediamo?',
        status: 'sent'
      },
      {
        date: '10/01/2020 16:15:22',
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
        date: '28/03/2020 10:10:40',
        message: 'Mauro, ho distrutto il footer! help me!!!',
        status: 'sent'
      },
      {
        date: '28/03/2020 10:20:10',
        message: 'Davide!! hai pushato?? che controllo',
        status: 'received'
      },
      {
        date: '28/03/2020 16:15:22',
        message: 'Si!',
        status: 'sent'
      }
      ],
    },
    {
      id: 4,
      name: 'Alessandro',
      avatar: '_3',
      visible: true,
      messages: [{
        date: '10/01/2020 15:30:55',
        message: 'Quando ci vediamo per sistemare quella cosa?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Ti aggiorno che controllo i turni di lavoro',
        status: 'received'
      },
      {
        date: '10/01/2020 15:30:55',
        message: 'bene, grazie!',
        status: 'sent'
      }
      ],
    },
    {
      id: 5,
      name: 'Giuliano',
      avatar: '_5',
      visible: true,
      messages: [{
        date: '10/01/2020 15:30:55',
        message: 'Ricordati di chiamare la mamma',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Va bene, la chiamerò stasera',
        status: 'received'
      }
      ],
    },
    {
      id: 6,
      name: 'Miriam (macello totale)',
      avatar: '_io',
      visible: true,
      messages: [{
        date: '10/01/2020 15:30:55',
        message: 'che disastro!',
        status: 'received'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'ahi ahi......',
        status: 'received'
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'che me voi imbruttì?????',
        status: 'sent'
      }
      ],
    },
    {
      id: 7,
      name: 'Filippo Urriani',
      avatar: '_7',
      visible: true,
      messages: [{
        date: '10/01/2020 15:30:55',
        message: 'quale sarà il prossimo compito??',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'le mie fonti dicono.... EXPEDIA',
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
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'received'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'No, già mangiata ieri, ordiniamo sushi!',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:51:00',
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
    randomReplies: ['Ciao', 'Come stai?', 'Usciamo Stasera??', 'Come butta?', 'Ti và di mangiare la pizza?', 'PRRRRRRRR', 'Hai pushato??']
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
        }, 3000);
    },
    eraseMessage(index, currentIndex) {
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




