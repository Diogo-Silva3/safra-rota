<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Safra Rota uses integer-cent PostgreSQL wallets and a transaction ledger; all balance mutations run in authenticated, row-locked SQL functions for atomicity and idempotency.
- Referral ancestry is immutable after registration and only exposed through an owner-scoped three-level SQL function; profiles never grant access to other users' private data.
- Public home displays an explicitly labeled sample dashboard; private screens live under the authenticated layout and share presentation components with that demo.
