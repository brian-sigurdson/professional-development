import argparse

parser = argparse.ArgumentParser(description="Prints out words passed in, capitalizing them if required and repeats them if requested")
parser.add_argument("message", help="Message to be echoed", nargs="+")
parser.add_argument("-c", "--capitalize", action="store_true")
parser.add_argument("--repeat", type=int, defaul=1)

args = parser.parse_args()

if args.capitalize:
    messages = [m.capitalize() for m in args.message]
else:
    messages = args.message
for _ in range(args.repeat):
    print(" ".join(messages))