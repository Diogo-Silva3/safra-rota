import { describe, it, expect } from 'vitest';
import { registrationSchema, inviterCode, earningsTotal, visibleLevels } from '@/lib/safra';
describe('Safra Rota rules',()=>{
 it('requires an inviter at registration',()=>{expect(registrationSchema.safeParse({name:'Diogo Silva',email:'person@example.com',password:'StrongTest123',inviter:''}).success).toBe(false);});
 it('accepts an inviter link',()=>{expect(inviterCode('https://example.com/auth?indicador=abc123')).toBe('ABC123');});
 it('shows at most three referral levels',()=>{expect(visibleLevels([{level:1},{level:2},{level:3},{level:4}])).toEqual([{level:1},{level:2},{level:3}]);});
 it('does not treat welcome credits or purchases as earnings',()=>{expect(earningsTotal([{kind:'welcome',amount_cents:100000},{kind:'purchase',amount_cents:-10000},{kind:'scenario',amount_cents:1850}])).toBe(1850);});
});
