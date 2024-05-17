const { createApp } = Vue

const myConfig = {
	data() {
		
		return {
			contacts: [
				{
					name: 'Michele',
					avatar:  './img/avatar_1.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Ricordati di stendere i panni',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							message: 'Tutto fatto!',
							status: 'received'
						}
					],
				},
				{
					name: 'Fabio',
					avatar: './img/avatar_2.jpg',
					visible: true,
					messages: [
						{
							date: '20/03/2020 16:30:00',
							message: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							message: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							message: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
						}
					],
				},
				{
					name: 'Samuele',
					avatar: './img/avatar_3.jpg',
					visible: true,
					messages: [
						{
							date: '28/03/2020 10:10:40',
							message: 'La Marianna va in campagna',
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							message: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:15:22',
							message: 'Ah scusa!',
							status: 'received'
						}
					],
				},
				{
					name: 'Alessandro B.',
					avatar: './img/avatar_4.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Si, ma preferirei andare al cinema',
							status: 'received'
						}
					],
				},
				{
					name: 'Alessandro L.',
					avatar: './img/avatar_5.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Ricordati di chiamare la nonna',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Va bene, stasera la sento',
							status: 'received'
						}
					],
				},
				{
					name: 'Claudia',
					avatar: './img/avatar_6.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Ciao Claudia, hai novità?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Non ancora',
							status: 'received'
						},
						{
							date: '10/01/2020 15:51:00',
							message: 'Nessuna nuova, buona nuova',
							status: 'sent'
						}
					],
				},
				{
					name: 'Federico',
					avatar: './img/avatar_7.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Fai gli auguri a Martina che è il suo compleanno!',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Grazie per avermelo ricordato, le scrivo subito!',
							status: 'received'
						}
					],
				},
				{
					name: 'Davide',
					avatar: './img/avatar_8.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Ciao, andiamo a mangiare la pizza stasera?',
							status: 'received'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
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
			
			view: 0,
			sent : [],
			searchBar : "",
			sideBar : document.getElementById("sidebar")
			
			
		}
	},
	methods: {
		 status(item,i) {
		 	if(item == "received" ){
		 		item = this.contacts.messages[i]
		 		console.log("item")
		 		return item[i].message[i]
			} else {
		
				return ""
			}

		 },
		check(item){
			if(item == 'sent'){
				return "send text-start" 
			}else{
				return "ric text-end col-2 offset-10"
			}
		},
		chose(index){
			this.view = index
			console.log(index)
			return "opened"	
		},
		opened(index){
			if(index == this.view)
			return "opened"
		},
		 lastElement(array){
		 	const last = array.length - 1
		 	return array[last]
		},
		addMsg(msg,index){
			console.log("cliccato")
		 	let newMsg = new Object({date: "\\", message : msg, status :"received"})
			let robot = new Object({date: "\\", message : "OKK!!", status :"sent"})
			this.contacts[index].messages.push(newMsg)
			this.contacts[index].messages.push(robot)
			console.log(this.contacts)
			this.sent = ""
		},
		search(item){
			for(x=0; x < this.contacts.length ;x++){
			array = this.contacts[x].name
			if(item == array ){
				console.log(array)
				console.log("yes")
				console.log(this.contacts[x].name) 
				return `${this.contacts[x].name}`
			}else{
				return "no"
				console.log("no")
				
			}
			
		}},

			// 
				
			// 	if(this.contacts[x].name == element){
			// 		console.log("yes")
			// 	}else{
			// 		console.log("no")
			// 	}
			// }
			


		
		
		
	
		
	},
	mounted(){
		window.vue = this
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');