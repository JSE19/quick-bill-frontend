<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/SMTP.php';


    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $fullName = htmlspecialchars($_POST['fullName'] ?? '');
        $email = htmlspecialchars($_POST['email'] ?? '');
        $message = htmlspecialchars($_POST['message'] ?? '');

        if(empty($fullName) || empty($email) || empty($message)){
            echo 'All fields are required.';
            exit;
        }
        $mail = new PHPMailer(true);
        try{
            $mail->isSMTP();
            $mail->Host = 'smtp.hostinger.com';
            $mail->SMTPAuth = true;
            $mail->Username = "support@quickbillhq.com";
            $mail->Password ="f1hkxQ3@Xt";
            $mail->SMTPSecure =PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 465;

            $mail->setFrom('support@quickbillhq.com','Quick contact');
            $mail->addAddress('support@quickbillhq.com', 'Quick Bill');

            $mail->isHTML(true);
            $mail->Subject = 'New Quickbill Content Message';
            $mail->Body = "
                <h3>Contact Details</h3>
                <p><strong>Name:</strong>{$fullName}</p>
                <p><strong>Email:</strong>{$email}</p>
                <p><strong>Message:</strong>{$message}</p>
            ";
            $mail->send();
            echo 'Your message has been sent successfully!';
        }catch(Exception $e){
            echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
        }

    }
    else{
        echo 'Invalid request method';
    }
