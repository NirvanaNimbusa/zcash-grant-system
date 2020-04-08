import json
from grant.proposal.models import Proposal, ProposalStatus, db
from ..config import BaseProposalCreatorConfig
from mock import patch
from ..test_data import mock_blockchain_api_requests

address_json = {
    "address": "zs15el0hzs4w60ggfy6kq4p3zttjrl00mfq7yxfwsjqpz9d7hptdtkltzlcqar994jg2ju3j9k85zk"
}

view_key_json = {
    "viewKey": "valid_view_key"
}


class TestProposalInviteAPI(BaseProposalCreatorConfig):

    def test_set_proposal_tip_address(self):
        self.login_default_user()
        res = self.app.put(
            f"/api/v1/proposals/{self.proposal.id}/tips",
            data=json.dumps(address_json),
            content_type='application/json'
        )
        self.assertStatus(res, 200)
        proposal = Proposal.query.get(self.proposal.id)
        self.assertEqual(proposal.tip_jar_address, address_json["address"])

    def test_set_proposal_tip_view_key(self):
        self.login_default_user()
        res = self.app.put(
            f"/api/v1/proposals/{self.proposal.id}/tips",
            data=json.dumps(view_key_json),
            content_type='application/json'
        )
        self.assertStatus(res, 200)
        proposal = Proposal.query.get(self.proposal.id)
        self.assertEqual(proposal.tip_jar_view_key, view_key_json["viewKey"])

        # test to make sure a user on the proposal team can see the view key
        res = self.app.get(
            f"/api/v1/proposals/{self.proposal.id}",
            data=json.dumps(view_key_json),
            content_type='application/json'
        )
        self.assert200(res)
        self.assertEqual(res.json["tipJarViewKey"], view_key_json["viewKey"])

        # test to make sure a user not on the proposal team can't see the view key
        self.proposal.status = ProposalStatus.LIVE
        db.session.add(self.proposal)
        db.session.commit()

        self.login_other_user()
        res = self.app.get(
            f"/api/v1/proposals/{self.proposal.id}",
            data=json.dumps(view_key_json),
            content_type='application/json'
        )
        self.assert200(res)
        self.assertIsNone(res.json["tipJarViewKey"])
