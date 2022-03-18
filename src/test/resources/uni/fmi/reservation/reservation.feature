Feature: Създаване на резервация за кино прожекция

	Scenario Outline: Резервация за кино прожекция
		Given Потребителя отваря екрана за резервация
		When Въвежда име: "<име>"
		And Въвежда телефонен номер: "<телефон>"
		And Въвежда прожекция: "<филм>"
		And Въвежда време на прожекция: "<време>"
	  And Въвежда място за сядане: "<място>"
	  And Натисне бутона за резервация
	  Then Вижда съобщение: "<Съобщение>"
	  
	  Examples:
	  | име    		 | телефон 		 | филм  	      		| време 	 					 | място 	 | Съобщение 					 |
		| Ivan	     | 0887684445  | Harry Potter 		| 2022-22-20 20:20   | 5       | Успешна резервация! |
		| Alex       | 0887682567  | Harry Potter 		| 2022-22-20 20:20   | 1       | Мястото е заето!    |
		|				     | 0887656570  | Harry Potter 		| 2022-22-20 20:20   | 2       | Моля въведете име!  |
		| Tanya      | 						 | Harry Potter 		| 2022-22-20 20:20   | 3       | Моля въведете номер!|	
		| Maria      | 0887698676  | Harry Potter 		| 									 | 4       | Моля въведете време!|
		| Dimitar    | 0887681238  | Harry Potter 		| 2022-22-20 20:20   |         | Моля въведете място!|
    | Petya      | 0887683563  | 							 		| 2022-22-20 20:20   | 6       | Моля въведете прожекция!|
		|  		       | 0887682912  | Harry Potter 		|                    | 7       | Моля въведете име и време!|
		| 				   | 						 | Harry Potter 		| 2022-22-20 20:20   | 8       | Моля въведете име и телефон!|
		| Anita      | 0887682241  | 									| 2022-22-20 20:20   | 	       | Моля въведете прожекция и място!|

		