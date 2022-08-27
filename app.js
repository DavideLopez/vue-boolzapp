console.log('boolzap')

const app = new Vue({
    el: '#root',
    data: {
        contacts: [{
            id: 1,
            nome: 'giorgia',
            avatar: '/avatar1',
            visible: true,
            messages: [
               {
                 date: '27/08/2022 12:33:46',
                 message: 'hai infornato la lasagna?',
                 status: 'sent',
               },
               {
                date: '27/08/2022 12:33:46',
                message: 'ricordati la sveglia!',
                status: 'sent',
              },
              {
                date: '27/08/2022 12:33:46',
                message: 'certo!',
                status: 'sent',
              },

            ]
             
        }]
    }
})

            