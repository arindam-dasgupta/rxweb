import {  creditCard,prop, } from "@rxweb/reactive-form-validators"

export class User {

	@prop()
	cardType: string;

	//If you want to apply conditional expression of type 'string'
	@creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "Visa"'  ,message:'Invalid Visa Credit Card Number.' }) 
	otherVisaCard: string;

	@creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "DinersClub"' }) 
	dinersClubCard: string;

}