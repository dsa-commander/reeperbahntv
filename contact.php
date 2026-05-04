<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$name    = trim(strip_tags($_POST['name']    ?? ''));
$email   = trim(strip_tags($_POST['email']   ?? ''));
$enquiry = trim(strip_tags($_POST['enquiry'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

// Prevent header injection
$name  = str_replace(["\r", "\n"], '', $name);
$email = str_replace(["\r", "\n"], '', $email);

if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

$to      = 'contact@reeperbahntv.com';
$subject = '[ReeperbahnTV] ' . ($enquiry ?: 'Enquiry') . ' — ' . $name;
$body    = "Name: $name\nE-Mail: $email\nType: $enquiry\n\n$message";
$headers = "From: contact@reeperbahntv.com\r\n"
         . "Reply-To: $email\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false]);
}
