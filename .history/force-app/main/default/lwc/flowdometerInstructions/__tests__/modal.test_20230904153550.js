//force-app/main/default/lwc/flowdometerInstructions/__tests__/modal.test.js
import { createElement } from 'lwc';
import Modal from 'c/modal';

describe('c-modal', () => {
    it('should emit close event when closed', async () => {
        const handler = jest.fn();
        element.addEventListener('close', handler);
    
        await Promise.resolve();  // Wait for any asynchronous DOM updates
        const closeButton = element.shadowRoot.querySelector('button.close');
    
        if (closeButton) {
            closeButton.click();
        }
    
        return Promise.resolve().then(() => {
            expect(handler).toHaveBeenCalled();
        });
    });
});