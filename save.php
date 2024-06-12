<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (isset($data['content'])) {
        file_put_contents('new.txt', $data['content']);
        echo 'File saved successfully';
    } else {
        echo 'No content to save';
    }
} else {
    echo 'Invalid request method';
}
?>
