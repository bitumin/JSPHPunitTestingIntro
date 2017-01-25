<?php

namespace TestingIntro;

class PasswordValidator
{
    public function isValid($password)
    {
        return $this->hasUppercase($password)
            && $this->hasLowercase($password)
            && $this->hasUnderscore($password)
            && $this->hasNumber($password)
            && $this->isLongEnough($password);
    }

    private function hasUppercase($password)
    {
        return $password !== strtolower($password);
    }

    private function hasLowercase($password)
    {
        return $password !== strtoupper($password);
    }

    private function hasUnderscore($password)
    {
        return false !== strpos($password, '_');
    }

    private function hasNumber($password)
    {
        return preg_match('/\d/', $password);
    }

    private function isLongEnough($password)
    {
        return strlen($password) > 6;
    }
}
