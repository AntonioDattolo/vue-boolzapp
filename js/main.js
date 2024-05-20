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
			view: null,
			sent : [],
			search : '',
			time_date_received :[],
			time_of : [],
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
				return   "ric text-end offset-10 nowrap"
			}else{
				return "send text-start"
			}
		},
		chose(index){
			this.view = index
			console.log(index)
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
		 	let newMsg = new Object({date: "10/01/2020 17:51:00", message : msg, status :"sent"})
			let robot = new Object({date: "10/01/2020 17:53:00", message : "OKK!!", status :"received"})
			this.contacts[index].messages.push(newMsg)
			this.contacts[index].messages.push(robot)
			console.log(this.contacts)
			this.sent = ""
		},
		splitDate(){
			this.time_date_received = []
			// ciclo sull'array principale
			for (i = 0; i < this.contacts.length; i++) {
				let base = []
				//ciclo su array di oggetti annidato
				for (x = 0; x < this.contacts[i].messages.length; x++) {
					let element = this.contacts[i].messages[x].date
					let status = this.contacts[i].messages[x].status
					console.log(element)
					let day_hour = element.slice(0)
					console.log("questo è slice", day_hour)
					let splitSlice = day_hour.split(" ")
					console.log("questo è lo split dello slice", splitSlice)
					let day = splitSlice[0]
					let hourMinuteSecond = splitSlice[1]
					let hourMinute = hourMinuteSecond.split(":")
					console.log("questo è lo split dell'orario ", hourMinute)
					base.push(new Object({ date: splitSlice[0], time: hourMinute[0] + ':' + hourMinute[1], status: status }))
				}
				this.time_date_received.push(base)
				console.log("array finale", this.time_date_received)
			}
		},
		splitTime(y) {
			this.time_of = []

			for (x = 0; x < this.contacts[x].messages.length; x++) {
				let element = this.contacts[x].messages[x].date
				let status = this.contacts[x].messages[x].status
				console.log(element)
				let day_hour = element.slice(0)
				console.log("questo è slice", day_hour)
				let splitSlice = day_hour.split(" ")
				let day = splitSlice[0]
				let hour = splitSlice[1]
				let hourMinuteSecond = splitSlice[1]
				let hourMinute = hourMinuteSecond.split(":")
				this.time_of.push(new Object({ time: hourMinute[0] + ':' + hourMinute[1], status: status }))
				console.log("questo è il push dei ricevuti", this.time_of)
			}

		},
		active(){
			if(this.view != null){
				console.log("ritorno d-block")
				return "d-block"
			}
		},
		back(){
			if( this.active() == "d-block" ){
				this.view = null
				console.log("ritorno d-none")
				return "d-none"

			}
		}
			
			

		



		
		
		
	
		
	},
	computed :{
		filteredChat : function(){
			return this.contacts.filter((contacts)=>{
				return contacts.name.match(this.search)
			})
		},

	},
	mounted(){
		window.vue = this
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');