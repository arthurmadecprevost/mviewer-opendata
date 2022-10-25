import json

class Document:

  def __init__(self, features):
    self.features = features

  def toJSON(self):
          return json.dumps(self, default=lambda o: o.__dict__, 
              sort_keys=True, indent=4)
class Feature:

  def __init__(self, type, geometry, properties):
    self.type = type
    self.geometry = geometry
    self.properties = properties

class Geometry:

  def __init__(self, type, coordinates):
    self.type = type
    self.coordinates = coordinates

class Properties:

  def __init__(self, code, nom, code_departement, dose_rayonnements_telluriques, dose_rayonnements_cosmiques, dose_radon_maison_individuelle,dose_radon_habitat_collectif):
      self.code = code
      self.nom = nom
      self.code_departement = code_departement
      self.dose_rayonnements_telluriques = dose_rayonnements_telluriques
      self.dose_rayonnements_cosmiques = dose_rayonnements_cosmiques
      self.dose_radon_maison_individuelle = dose_radon_maison_individuelle
      self.dose_radon_habitat_collectif = dose_radon_habitat_collectif

