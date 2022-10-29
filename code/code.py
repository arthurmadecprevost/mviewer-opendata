import csv
import json
from Classes import Document, Feature, Geometry, Properties

## Initialisation d'un objet document qui represente le modele de donnée voulu en sortie
document = Document([])

## Ouverture du fichier json
with open('../data/communes.geojson') as f:
    data = json.load(f) 

    ## Ouverture du fichier csv et traitement
    with open("../data/communes-rayonnements.csv") as file :
        csvreader = csv.reader(file)
        header = next(csvreader)
        ## Traitement des lignes du fichier csv
        for row in csvreader:
            ## Récuperation des informations dans le fichier CSV
            infosCsv = row[0].split(';')
            
            """ 
            Correspondance propriété - index du tableau :
                code_insee = infosCsv[0]
                nom_commune = infosCsv[1]
                code_departement = infosCsv[2]
                dose_rayonnements_telluriques = infosCsv[3]
                dose_rayonnements_cosmiques = infosCsv[4]
                dose_radon_maison_individuelle = infosCsv[5]
                dose_radon_habitat_collectif = infosCsv[6] 
            
            """
            
            
            ## Boucle while sur les differentes comunes du fichier json jusqu'a trouver la meme que la commune du fichier csv
            trouve = False
            while trouve == False:
                for i in data['features']:
                    if i['properties']['code'] == infosCsv[0]:
                        print("Processing " + i['properties']['code'] + " " + infosCsv[1])
                        trouve = True
                        document.features.append(
                            Feature(
                                "Feature",
                                Geometry(i['geometry']['type'], i['geometry']['coordinates']),
                                Properties(infosCsv[0], infosCsv[1], infosCsv[2], infosCsv[3],infosCsv[4], infosCsv[5], infosCsv[6])
                            )
                        )

        # Serialisation du document en json et ecriture dans un fichier
        with open("Result.geojson", "w") as outfile:
            outfile.write(document.toJSON())
