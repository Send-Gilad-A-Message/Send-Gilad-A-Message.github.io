#!/usr/bin/env node


function checkPassword(p,m) {
    
    import {connect} from './amqplib/callback_api.js';
    
    password = p;
    // If password not entered
    if (password == '')
        alert ("Please enter Password");
          
    // If confirm password not entered
   
    else if (password != "answer0821") {
        alert ("\nPassword incorrect Please try again...")
        return false;
    } else if (password == "answer0821") {
        form.password.value  = '';
        connect('amqps://btmtimzd:kTi9RE4Rly6MCjm4NK0vJKv6Y7dQGQ7o@clam.rmq.cloudamqp.com/btmtimzd', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'to_gilad';
            var msg = m;

            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(msg));

            console.log(" [x] Sent %s", msg);
        });
        setTimeout(function() {
            connection.close();
            process.exit(0);
        }, 500);
    });
    }
}