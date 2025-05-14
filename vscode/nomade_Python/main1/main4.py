class Player:
    def __init__(self, name, team):
        self.name = name
        self.xp = 1500  # 플레이어 경험치는 고정값
        self.team = team

    def introduce(self):
        print(f"Hello! I'm {self.name} and I play for {self.team}")

class Team:
    def __init__(self, team_name):
        self.team_name = team_name
        self.players = []

    def show_players(self):
        for player in self.players:
            player.introduce()

    def add_player(self, name):
        new_player = Player(name, self.team_name)
        self.players.append(new_player)

    def remove_player(self, name):  # 이름으로 플레이어 제거
        self.players = [player for player in self.players if player.name != name]
        # 리스트 내포 사용: name이 일치하지 않는 플레이어만 남김

    def show_total_xp(self):  # 팀의 전체 XP 총합 출력
        total_xp = sum(player.xp for player in self.players)
        print(f"Team xp : {total_xp} point")

team_x = Team("Team X")
team_x.add_player("nico")
team_x.add_player("abcd")

team_blue = Team("Team Blue")
team_blue.add_player("Lynn")
team_blue.add_player("abcde")

# 전체 플레이어 출력
print("Team Blue Players:")
team_blue.show_players()

# 플레이어 제거
team_blue.remove_player("abcde")

# 다시 확인
print("\nAfter removal:")
team_blue.show_players()

# XP 총합 확인
team_blue.show_total_xp()
team_x.show_total_xp()

# 문제풀이