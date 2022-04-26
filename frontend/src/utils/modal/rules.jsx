//Règles de chaque épreuve, ainsi que lien vers une vidéo explicative. Comme dit dans le rapport, 
//il faudrait créer une table dans la base de données plutôt que de le faire localement

export const RulesData = [
  {
    game: 'Top 5',
    manches: '2 manches - 15 points par manche',
    rules:
      'Donne 5 (bonnes ?) réponses au thème sélectionné en 20 secondes. Si tu échoues, l’équipe adversaire peut voler tes points en donnant les réponses manquantes en 10 secondes.',
    video: 'https://www.youtube.com/embed/0V9VOU2QQaA',
  },
  {
    game: 'Les 3 petits chats',
    manches: '2 manches - 10 points par manche',
    rules:
      'Le maître de jeu choisit un rappeur et lance un trois petits r(c)chats. L’équipe adverse doit reprendre la dernière syllabe du premier nom cité, et ainsi de suite en répétant tous les noms depuis le début, jusqu’à ce qu’une équipe se trompe.',
  },
  {
    game: 'Le CrossFeaturing',
    manches: '3 manches - 5 points par manche',
    rules:
      'Le maître du jeu choisit deux rappeurs. Trouve le chemin le plus court qui lie les deux artistes en citant des featurings, et vole les points à l’autre équipe si tu trouves plus court.',
  },
  {
    game: 'Le Mytho Pas Mytho',
    manches: '4 manches - 5 points par manche',
    rules: 'Trouve si ces anecdotes sur le rap sont ou non des mythos.',
  },
  {
    game: 'Rap génie ou rap gênant',
    manches: '4 manches - 5 points par manche',
    rules:
      'Un extrait de rap, ou pas.. à toi de deviner si c’est du génie ou si c’est juste gênant.',
  },
  {
    game: 'Les enchères',
    manches: '1 manche - Les points sont décidés aux enchères',
    rules:
      "Le maître de jeu choisit un thème parmi ceux proposés. Les deux équipes participent aux enchères et doivent donner le nombre de réponses qu'ils sont capables de donner pour le thème choisi. Attention, si l'équipe qui participe aux enchères ne réussit pas, les points iront à l'autre équipe.",
  },
  {
    game: 'Rolland Gamos',
    manches: '3 manche - Les points sont décidés par le maître de jeu',
    rules:
      "Le maître de jeu choisit un rappeur parmi ceux proposés. L'équipe ayant le moins de points commence par citer un featuring que ce rappeur a fait avec un autre rappeur. Puis l'autre équipe doit trouver un featuring qu'a fait le dernier rappeur cité avec un autre rappeur. Il est interdit de répéter deux fois le même rappeur !",
  },
]
