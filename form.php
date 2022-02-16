
<?php

require_once __DIR__ . '/vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

if ($_GET["password"] != 'answer0821'){
  echo '<script>alert("Wrong password, please try again...")</script>';
} else {

$connection = new AMQPStreamConnection('amqps://btmtimzd:kTi9RE4Rly6MCjm4NK0vJKv6Y7dQGQ7o@clam.rmq.cloudamqp.com/btmtimzd', 5672, 'guest', 'guest');
$channel = $connection->channel();

$channel->queue_declare('to_gilad', false, false, false, false);

$msg = new AMQPMessage($_GET["message");
$channel->basic_publish($msg, '', 'to_gilad');

echo " [x] Sent \n";

$channel->close();
$connection->close();
}
?>

