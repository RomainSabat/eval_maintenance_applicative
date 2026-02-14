il y a 3 types de maintenance : 
corrective qui correspond a la correstion de bugs
évolutive qui correspond a l'ajout ou la modification de fonctionnalités
preventive qui correspond a l'ajout de test

Lors d'un incident, tel qu'un bug bloquant, il faut dans un premier temps essayer de reproduire le bug
afin d'identifier la provenance de ce bug, executer les tests pour verifier qu'aucun n'échouent et enfin le corriger
et ajouter des tests pour éviter que cela se reproduise par la suite.

lors de l'evolution de l'application il est important de verifier que tout les tests fonctionnent toujours
pour eviter de casser une fonctionnalité qui fonctionnait auparavant, il est également important d'ajouter de nouveau
tests pour tester les changements apportés et faciliter la maintenace de l'application.



il y a 3 trois indicateurs important a prendre en compte pour faire de la qualités, premièrement, le nombre de qui doit 
toujours augmenter avec l'ajout de fonctionnalités. Deuxiemement, le coverage/couverture des tests doit augmenter egalement 
pour s'assurer que toutes les fonctionnalités sont bien testées. Enfin le nombre d'issue doit diminuer au fur de l'évolution 
de l'application pour eviter notamment la duplication de code et faciliter sa comprehension et donc sa maintenabilité.

En cas de bug critique, essayer de reproduire le test pour en identifier sa source, puis une fois celle ci trouvée,
corriger la tout en s'assurant que les tests fonctionnent toujours. Une fois fait, rajouter des tests adequat pour eviter 
que ce bug se reproduise par la suite. 