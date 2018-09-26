from grant.comment.models import Comment
from grant.extensions import ma, db


class SocialMedia(db.Model):
    __tablename__ = "social_media"

    id = db.Column(db.Integer(), primary_key=True)
    # TODO replace this with something proper
    social_media_link = db.Column(db.String(255), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __init__(self, social_media_link, user_id):
        self.social_media_link = social_media_link
        self.user_id = user_id


class Avatar(db.Model):
    __tablename__ = "avatar"

    id = db.Column(db.Integer(), primary_key=True)
    image_url = db.Column(db.String(255), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="avatar")

    def __init__(self, image_url, user_id):
        self.image_url = image_url
        self.user_id = user_id


class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer(), primary_key=True)
    email_address = db.Column(db.String(255), unique=True, nullable=True)
    account_address = db.Column(db.String(255), unique=True, nullable=True)
    display_name = db.Column(db.String(255), unique=False, nullable=True)
    title = db.Column(db.String(255), unique=False, nullable=True)

    social_medias = db.relationship(SocialMedia, backref="user", lazy=True)
    comments = db.relationship(Comment, backref="user", lazy=True)
    avatar = db.relationship(Avatar, uselist=False, back_populates="user")

    # TODO - add create and validate methods

    def __init__(self, email_address=None, account_address=None, display_name=None, title=None):
        if not email_address and not account_address:
            raise ValueError("Either email_address or account_address is required to create a user")

        self.email_address = email_address
        self.account_address = account_address
        self.display_name = display_name
        self.title = title


class UserSchema(ma.Schema):
    class Meta:
        model = User
        # Fields to expose
        fields = ("account_address", "userid", "title", "email_address", "display_name", "title")

    userid = ma.Method("get_userid")
    title = ma.Method("get_title")
    avatar = ma.Method("get_avatar")

    def get_userid(self, obj):
        return obj.id

    def get_title(self, obj):
        return ""

    def get_avatar(self, obj):
        return "https://forum.getmonero.org/uploads/profile/small_no_picture.jpg"


user_schema = UserSchema()
users_schema = UserSchema(many=True)
