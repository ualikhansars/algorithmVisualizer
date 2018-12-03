import { initializeStack } from './visualRepresentation/dataStructures/stack/initializeStack';
import { isStringInUrl } from './visualRepresentation/utils/isStringInUrl';
import { stackListener } from './visualRepresentation/dataStructures/stack/listener';
import { initializeBST } from './visualRepresentation/dataStructures/trees/binarySearchTree/initializeBST';

stackListener();
if(isStringInUrl("stack?visualRepresentation=true")) {
    initializeStack();
}

else if(isStringInUrl("binarySearchTree?visualRepresentation=true")) {
    initializeBST();
}


