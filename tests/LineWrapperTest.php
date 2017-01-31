<?php

namespace TestingIntro\Tests;

use TestingIntro\LineWrapper;

class LineWrapperTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var LineWrapper $wordWrap
     */
    protected $wordWrap;

    public function setUp()
    {
        $this->wordWrap = new LineWrapper();
    }

    public function testDoesNotWrapShortLines()
    {
        $this->assertSame('hola', $this->wordWrap->wrap('hola', 50));
    }

    public function testWrapsLongLine()
    {
        $this->assertSame('este\nrnoc\nleid\nomas\ntoid\neo', $this->wordWrap->wrap('esternocleidomastoideo', 4));
    }
}
