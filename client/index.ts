import { initializeStack } from './visualRepresentation/dataStructures/stack/initializeStack';
import { isStringInUrl } from './visualRepresentation/utils/isStringInUrl';
import { stackListener } from './visualRepresentation/dataStructures/stack/listener';

stackListener();
if(isStringInUrl("stack?visualRepresentation=true")) {
    initializeStack();
}


