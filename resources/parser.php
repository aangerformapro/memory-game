<?php


$icons = json_decode(file_get_contents(__DIR__ . '/devicon.json'));


$result = [];

$className = 'devicon-%s-%s';


foreach ($icons as $item) {

    foreach (['original', 'plain'] as $variant) {

        if (in_array($variant, $item->versions->font)) {
            $result[$item->name] = sprintf($className, $item->name, $variant);
            continue 2;
        }
    }
}


file_put_contents(__DIR__ . '/icons.json', json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
