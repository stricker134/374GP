var sql = require('./../db')
var nodemailer = require('nodemailer');

var functions = {
    addToDb :  async function(title,subtitle,body,image){
        return new Promise(async function(resolve, reject) {
            dateNow = new Date();
            var statement = `insert into posts (title,subtitle,body,image, subbmitDate) values('${title}','${subtitle}','${body}','${image}','${dateNow}')`;

            var row = await sql.run(statement, function(err) {
                if (err) {
                    console.log(err);
                }
                else{
                    resolve(this.lastID);
                }
            });
        });
    },

    getPost : async function(id){
        return new Promise(async function(resolve, reject) {
            var statement = `select * from posts where id = ${id}`;

            var row = await sql.get(statement,[], function(err,row) {
                if (err) {
                    console.log(err);
                }
                else{
                    resolve(row);
                }
            });
        });
    },

    sendEmail: function( body,) {
		return new Promise(async function(resolve, reject) {
			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'savoymailer@gmail.com',
					pass: 'Mail4321'
				}
			});
			var mailOptions = {
				from: 'email',
				to: 'njstrick@iu.edu',
				subject: 'You recieved mail from your website',
				text: body
			};

			transporter.sendMail(mailOptions, function(error, info) {
				if (error) {
					reject(error);
				} else {
					resolve('Success');
				}
			});
		});
	}
}

module.exports = functions;