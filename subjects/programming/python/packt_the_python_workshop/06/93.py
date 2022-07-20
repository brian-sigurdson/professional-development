import logging

logger = logging.getLogger("logger_name")

logger.debug("debug")
logger.info("info")
logger.warning("warning")
logger.error("error")
logger.fatal("fatal")

system = "moon"
for number in range(3):
    logger.warning(f"{number} errors reported in {system}")

