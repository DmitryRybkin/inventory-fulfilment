<?php declare(strict_types=1);

namespace MyCompany\InventoryFulfilment\Controller\Index;

use Magento\Framework\App\Action\HttpGetActionInterface;
use Magento\Framework\App\ResponseInterface;
use Magento\Framework\Controller\ResultInterface;
use Magento\Framework\View\Result\Page;
use Magento\Framework\View\Result\PageFactory;

class Index implements HttpGetActionInterface
{
    public function __construct(
        private PageFactory $pageFactory
    ) {}

    public function execute(): Page|ResultInterface|ResponseInterface
    {
        $page = $this->pageFactory->create();
        $page->getConfig()->getTitle()->set(__("Shipping plan"));
        return $page;
    }
}
