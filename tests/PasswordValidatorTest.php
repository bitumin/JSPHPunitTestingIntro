<?php
namespace TestingIntro\Tests;

use TestingIntro\PasswordValidator;

class PasswordValidatorTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var PasswordValidator $validator
     */
    public $validator;

    public function setUp()
    {
        $this->validator = new PasswordValidator();
    }

    public function testInvalidatesNoUppercase()
    {
        $this->assertFalse($this->validator->isValid('hola_1234'));
    }

    public function testInvalidatesNoLowercase()
    {
        $this->assertFalse($this->validator->isValid('HOLA_1234'));
    }

    public function testInvalidatesNoUnderscore()
    {
        $this->assertFalse($this->validator->isValid('holaX1234'));
    }

    public function testInvalidatesNoNumbers()
    {
        $this->assertFalse($this->validator->isValid('hola_HOLA'));
    }

    public function testInvalidatesTooShort()
    {
        $this->assertFalse($this->validator->isValid('hO1_'));
    }

    public function testValidatesValid()
    {
        $this->assertTrue($this->validator->isValid('hola_HOLA_1234'));
    }
}
