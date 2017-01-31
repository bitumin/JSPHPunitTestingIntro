<?php

namespace TestingIntro;

class LineWrapper
{
    public function wrap($text, $columns)
    {
        if ($columns > strlen($text)) {
            return $text;
        }

        return substr($text, 0, $columns) . '\n' . $this->wrap(substr($text, $columns, strlen($text)), $columns);
    }
}
