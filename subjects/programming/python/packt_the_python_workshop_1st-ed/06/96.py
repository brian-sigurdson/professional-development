import collections

_audit = collections.defaultdict(lambda: ["Aread created"])

def add_audit(area, action):
    _audit[area].append(action)

def report_audit():
    for area, actions in _audit.items():
        print(f"{area} audit:")
        for action in actions:
            print(f"- {action}")
        print()


add_audit("HR", "Hired Sam")
add_audit("Finance", "Used 1000")
add_audit("HR", "Hired Tom")
report_audit()