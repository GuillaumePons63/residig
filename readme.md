Le projet est codé pour node v22.16.0. La raison est lié à l'herbergement o2switch.

Le lien figma est ici : [figma](https://www.figma.com/design/Xkj0evtJYMgqnq6mSAmvDI/RESIDIG?node-id=0-1&p=f&t=c55B5ts42B1ur47c-0)

Actuellement o2switch ne prend pas en charge sqlite, j'aurai donc une base postgres pour la mise en production.

Pour le mise en ligne, le fichier asset/prod/entry.cjs doit être ajouté à la partie server

Setup :

Oui, tu es clair.

Le plus simple : ajouter le 2ᵉ compte GitHub (et rester en GitHub OAuth).
Passer sur Google est plus compliqué et, surtout, ça ne remplace pas GitHub : pour publier sur le repo, il faudra quand même gérer un accès Git (souvent via un PAT). Donc Google ajoute de la config sans bénéfice réel dans ton cas.

Ce que tu dois faire (2 comptes GitHub qui peuvent tout modifier + publier)

1. Donner l’accès au repo

Sur GitHub → GuillaumePons63/residig → Settings → Collaborators / Manage access :

Ajoute l’autre personne en Write (ou Maintain).

Elle accepte l’invitation.

2. Restreindre Studio à vous deux (recommandé)

Sur Vercel → Environment Variables :

STUDIO_GITHUB_MODERATORS=email_du_compte_1,email_du_compte_2

⚠️ Mets bien les emails GitHub des comptes (ceux associés au compte, idéalement vérifiés).

3. L’autre se connecte à Studio

Elle va sur https://residig.fr/_studio

Se connecte avec son GitHub

Elle doit voir l’éditeur et pouvoir publier.

4. Si elle a le même bug “Publish Failed … [0]”

Alors le plus simple devient :

sur son GitHub : au moins 1 email vérifié + (idéalement) un public email

puis se déconnecter/reconnecter à Studio.

Conclusion

✅ Ajoute un 2ᵉ compte GitHub (collaborateur + moderators) = le plus simple et propre.
❌ Google = plus de setup + tu retombes quand même sur GitHub pour publier.

Si tu me donnes juste : le repo est public ou privé ? et si main est protégée, je te dis s’il y a une étape en plus (branch protection / PR obligatoires).
